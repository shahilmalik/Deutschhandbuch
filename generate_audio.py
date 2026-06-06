# ─────────────────────────────────────────────────────────────────
# Claude German — A1 Audio Generator
# Run once on your Mac:  python3 generate_audio.py
# Requires:  pip install gtts
# Output: one MP3 per chapter saved in German26/Audio/
# ─────────────────────────────────────────────────────────────────

from gtts import gTTS
import os, time, pathlib

OUT_DIR = pathlib.Path(__file__).parent / "Audio"
OUT_DIR.mkdir(exist_ok=True)

chapters = [
    {
        "num": 1, "title": "Begrüßung und Vorstellung",
        "nouns": ["der Name","der Vorname","der Nachname","die Person","das Land","die Sprache",
                  "die Frage","die Antwort","der Buchstabe","die Zahl","das Alphabet","der Kurs",
                  "die Klasse","der Lehrer","die Lehrerin","der Student","die Studentin"],
        "verbs": ["heißen","sein","kommen","wohnen","sprechen","buchstabieren","vorstellen",
                  "fragen","antworten","wiederholen"],
    },
    {
        "num": 2, "title": "Länder, Berufe und Familie",
        "nouns": ["die Familie","der Mann","die Frau","das Kind","der Sohn","die Tochter",
                  "der Bruder","die Schwester","der Vater","die Mutter","die Eltern","der Beruf",
                  "der Arzt","die Ärztin","der Ingenieur","die Ingenieurin","der Kellner",
                  "die Kellnerin","der Koch","die Köchin"],
        "verbs": ["arbeiten","studieren","lernen","leben","haben","heiraten","kennen","mögen"],
    },
    {
        "num": 3, "title": "Essen und Trinken",
        "nouns": ["das Frühstück","das Mittagessen","das Abendessen","das Brot","die Milch",
                  "der Käse","das Ei","die Butter","der Apfel","die Banane","das Gemüse",
                  "das Fleisch","der Fisch","die Suppe","der Salat","das Wasser","der Kaffee",
                  "der Tee","der Saft","das Bier","der Wein","das Restaurant","die Speisekarte",
                  "die Rechnung"],
        "verbs": ["essen","trinken","kochen","bestellen","bezahlen","schmecken","kaufen","möchten"],
    },
    {
        "num": 4, "title": "Alltag und Uhrzeit",
        "nouns": ["die Uhrzeit","die Stunde","die Minute","der Tag","die Woche","der Monat",
                  "das Jahr","der Morgen","der Mittag","der Abend","die Nacht",
                  "der Montag","der Dienstag","der Mittwoch","der Donnerstag","der Freitag",
                  "der Samstag","der Sonntag","der Wecker","die Arbeit","die Pause"],
        "verbs": ["aufstehen","einschlafen","frühstücken","anfangen","aufhören","fahren",
                  "gehen","kommen","beginnen","dauern"],
    },
    {
        "num": 5, "title": "Zuhause und Wohnen",
        "nouns": ["die Wohnung","das Haus","das Zimmer","die Küche","das Badezimmer",
                  "das Schlafzimmer","das Wohnzimmer","der Garten","der Balkon","das Bett",
                  "der Tisch","der Stuhl","das Sofa","der Schrank","das Regal","die Lampe",
                  "der Kühlschrank","die Dusche","die Badewanne","die Miete","der Vermieter",
                  "die Adresse"],
        "verbs": ["wohnen","mieten","suchen","finden","einziehen","aufräumen","putzen","kosten"],
    },
    {
        "num": 6, "title": "Einkaufen und Preise",
        "nouns": ["der Supermarkt","das Geschäft","der Markt","die Bäckerei","der Preis",
                  "das Geld","der Euro","der Cent","die Kasse","die Tasche","das Kleid",
                  "die Hose","das Hemd","der Pullover","die Jacke","der Schuh","die Größe",
                  "die Farbe"],
        "verbs": ["kaufen","verkaufen","bezahlen","kosten","anprobieren","tragen","nehmen","brauchen"],
    },
    {
        "num": 7, "title": "Verkehr und Wegbeschreibung",
        "nouns": ["das Auto","der Bus","die Straßenbahn","der Zug","das Fahrrad","das Flugzeug",
                  "der Bahnhof","der Flughafen","die Haltestelle","die Straße","der Weg",
                  "die Kreuzung","die Ampel","die Fahrkarte","der Parkplatz"],
        "verbs": ["fahren","fliegen","gehen","laufen","einsteigen","aussteigen","umsteigen",
                  "parken","abbiegen"],
    },
    {
        "num": 8, "title": "Gesundheit und Körper",
        "nouns": ["der Kopf","das Auge","die Nase","der Mund","das Ohr","der Hals","der Arm",
                  "die Hand","das Bein","der Fuß","der Bauch","der Rücken","die Erkältung",
                  "das Fieber","der Schmerz","die Kopfschmerzen","die Tablette",
                  "das Krankenhaus","der Arzt","die Apotheke"],
        "verbs": ["wehtun","sich fühlen","krank sein","husten","niesen","schlafen",
                  "aufwachen","erholen"],
    },
    {
        "num": 9, "title": "Hobbys und Freizeit",
        "nouns": ["das Hobby","der Sport","das Fußball","das Tennis","das Schwimmen","die Musik",
                  "das Konzert","das Kino","der Film","das Buch","die Zeitung","die Party",
                  "der Urlaub","das Wochenende","die Freizeit","das Spiel","der Verein"],
        "verbs": ["spielen","lesen","sehen","hören","tanzen","singen","reisen","wandern",
                  "schwimmen","treffen"],
    },
    {
        "num": 10, "title": "Wetter und Jahreszeiten",
        "nouns": ["das Wetter","die Temperatur","der Grad","die Sonne","der Regen","der Schnee",
                  "der Wind","der Nebel","das Gewitter","die Wolke","der Frühling","der Sommer",
                  "der Herbst","der Winter","die Jahreszeit"],
        "verbs": ["scheinen","regnen","schneien","wehen","werden","gefallen"],
    },
    {
        "num": 11, "title": "Arbeit und Berufe",
        "nouns": ["der Beruf","die Arbeit","das Büro","die Firma","der Chef","die Chefin",
                  "der Kollege","die Kollegin","das Gehalt","die Stelle","der Termin",
                  "die E-Mail","das Telefon","der Computer","der Drucker","die Besprechung"],
        "verbs": ["arbeiten","anrufen","schreiben","lesen","schicken","helfen","erklären",
                  "verdienen","beginnen","beenden"],
    },
    {
        "num": 12, "title": "Reisen und Urlaub",
        "nouns": ["die Reise","der Urlaub","das Hotel","das Zimmer","die Reservierung","der Pass",
                  "das Visum","der Koffer","die Tasche","das Ticket","der Strand","das Meer",
                  "der Berg","der See","die Stadt","das Dorf","die Sehenswürdigkeit",
                  "die Kamera","das Souvenir"],
        "verbs": ["reisen","buchen","reservieren","packen","ankommen","abfahren","übernachten",
                  "fotografieren","besuchen","erkunden"],
    },
]

print(f"Saving MP3s to: {OUT_DIR}\n")

for ch in chapters:
    num   = ch["num"]
    title = ch["title"]

    lines = [f"Kapitel {num}. {title}."]
    lines.append("Nomen.")
    for w in ch["nouns"]:
        lines.extend([f"{w}.", f"{w}."])   # each word said twice
    lines.append("Verben.")
    for w in ch["verbs"]:
        lines.extend([f"{w}.", f"{w}."])

    script = "  ".join(lines)
    fname  = OUT_DIR / f"Kapitel_{num:02d}_{title.replace(' ', '_')}.mp3"

    tts = gTTS(text=script, lang="de", slow=False)
    tts.save(str(fname))
    print(f"✓ Kapitel {num:02d}: {fname.name}")
    time.sleep(0.4)

print("\nFertig! All 12 audio files are in the Audio/ folder.")
