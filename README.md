# 🔍 The Engineering Mystery

A noir-themed detective scavenger hunt web app for engineering students.

## 🎮 Play the Game

**[Launch the Mystery →](https://michellelisowski.github.io/mysteryNight/index.html)**

## 📖 About

This is an interactive scavenger hunt where five teams of engineering students explore their building to solve a noir-style mystery. Each team investigates a different piece of evidence:

- 🔧 **Mechanical Engineering** → The Weapon
- ⚡ **Electrical Engineering** → The Time of Crime
- 🏗️ **Civil Engineering** → The Location
- ⚧ **Chemical Engineering** → The Motive
- 💻 **Computer Engineering** → The Suspect

Teams find physical clues hidden throughout the building and enter locations into the app to unlock the next piece of their investigation.

## 🛠️ Customization

To customize the clues for your own building:

1. Open `index.html` in any text editor
2. Find the `teams` object (around line 15)
3. Edit the clue texts, answers, and hints
4. Save and push to GitHub

Example:
```javascript
clues: [
  {
    text: "Your custom clue text here...",
    answer: "your location name",
    hint: "A helpful hint if they're stuck"
  }
]

## 🚀 Tech Stack

- React 18
- Tailwind CSS
- Vanilla JavaScript
- No build process required - runs entirely in the browser!

## 📱 Usage

Teams should:
1. Navigate to the URL on their phones
2. Select their team
3. Read the first clue
4. Find the physical location
5. Enter the location name to unlock the next clue
6. Complete all 3 clues to solve their part of the mystery

## 📄 License

Free to use and modify for educational purposes.
