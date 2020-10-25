const express = require("express");
/*
 *const Exercises = require("./models");
 */
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/exercises", (req, res) => {
  const Exercises = [
    {
      id: 1,
      name: "Chair Pose",
      description: "Utkatasana",
      steps: [
        "1.	Begin standing in Mountain Pose or Tadasana, with your feet separated hip distance apart and parallel to one another. Spread your toes wide and ground down through all four corners of your feet—the big toe mound, pinky toe mound, and the two outer edges of the heels.",
        "2.	On an inhale, sweep your arms overhead with your palms facing one another. Keep your ears in line with your arms and relax your shoulders.",
        "3.	Exhale and bend your knees deeply, as if you are sitting into a chair. Bring your thighs as close to parallel with the floor as your body feels comfortable allowing, and keep your knees hip distance apart.",
        "4.	Keep your weight grounded firmly through your heels and shift your hips back until your knees begin to stack directly over your ankles.",
        "5.	Notice also if your torso begins to collapse forward, and instead keep your chest slightly lifted and your collarbone broad. Firm up the low belly to create a sense of tone.",
        "6.	Allow your tailbone to point straight down toward the ground and maintain length along your spine.",
        "7.	Hold the pose for five full, deep breaths. To come out of the pose, straighten your legs on an inhale, and bring your arms to your sides on an exhale; alternately, use an exhale to fold forward into Uttanasana for a more passive exit.",
      ],
      benefits: [
        "1.	Tones the leg muscles excellently",
        "2.	Strengthens hip flexors, ankles, calves, and back",
        "3.	Stretches chest and shoulders",
        "4.	Reduces symptoms of flat feet",
        "5.	Stimulates the heart, diaphragm, and abdominal organs",
      ],
      link: "https://www.youtube.com/watch?v=0FxWRAJht6k",
      image: "https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1",
      level: "beginner",
    },
    {
      id: 2,
      name: "Boat Pose",
      description: "Navasana",
      steps: [
        "1. Begin seated with your knees bent and feet flat on the floor, hands resting beside your hips. Draw your awareness inward and focus on your breath. Allow your inhalations and exhalations to be smooth, calm, and even.",
        "2. Keeping your spine straight, lean back slightly and lift your feet, bringing your shins parallel to the floor.",
        "3. Draw in your low back, lift your chest, and lengthen the front of your torso. Then, extend your arms forward, in line with your shoulders with your palms facing each other.",
        "4. Balance on your sit bones, keeping your spine straight. Take care not to let your lower back sag or chest collapse.",
        "5. Lengthen the front of your torso from your pubic bone to the top of your sternum. The lower belly (the area below your navel) should be firm and somewhat flat, but not hard or thick.",
        "6. With an exhalation, straighten your legs to a 45-degree angle from the ground, bringing your body into a V shape.",
        "7. Keep your breath easy, steady, and smooth. Focus your awareness within. Soften your eyes and your face. Gaze at your toes.",
        "8. Spread your shoulder blades wide and reach out through your fingers, actively engaging your hands.",
        "9. Stay in the pose for five breaths, gradually working up to one minute. To release the pose, exhale as you lower your legs and hands to the floor.",
      ],
      benefits: [
        "1. Building strength and steadiness at body core.",
        "2. Improve digesstion.",
        "3. Helps to maintaion metabolism and relieve stress.",
        "4. Increase ability to stay focused, internally aware, and emotionally calm.",
        "5. Strengthen your spine and hip flexors.",
      ],
      link: "https://www.youtube.com/watch?v=QVEINjrYUPU",
      image:
        "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1",
      level: "intermediate",
    },
    {
      id: 3,
      name: "Peacock Pose",
      description: "Mayurasana",
      steps: [
        "1.	From all fours, turn your hands so that your fingertips face back towards you.",
        "2.	Bring your hands next to one another underneath your bellybutton. Bend your elbows and press your pinky fingers together, making a connection all the way up to your elbows.",
        "3.	Engage your core and lean forward, setting your core onto your elbow and tricep shelf.",
        "4.	Bring your gaze forward and shift your weight forward.",
        "5.	Keep pressing your arms towards one another and lift your upper back up slightly.",
        "6.	Extend your legs back one at a time into a Plank-like position.",
        "7.	Engage the backs of your legs and squeeze your inner thighs together.",
        "8.	Play around with your balance, floating one leg a time, until you can eventually lift and balance both legs in the air.",
      ],
      benefits: [
        "1.	Build strength in your wrists and forearms.",
        "2.	Strengthen your abdominal section.",
        "3.	Improve digestion.",
        "4.	Improve Blood Circulation.",
        "5.	Improve Functionallity of liver,Kidney, Intestine.",
      ],
      link: "https://www.youtube.com/watch?v=ASNK54226ts",
      image: "",
      level: "advanced",
    },
  ];
  res.json(Exercises);
});
