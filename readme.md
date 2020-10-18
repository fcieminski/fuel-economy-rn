# Fuel Economy v2

New version of my previous app Fuel Economy, this time made with React Native, Redux and TypeScript.
I have done it mostly for practise, but also for my own use. I have decided to abbadon my Flutter project, I find RN more pleasant to develop. I have decided to implement TypeScript, but I know that it's not fully proper done in this project, there are a lot of places to improve, but for practice reason I'm happy with it.

## How it works?

Like eariel version in Flutter, most of the features have been implemented in this React Native version. There are few differences which will be implemented in future version, but for now, it's good enough for testing purposes.

**Things implemented:**

- Adding and removing car info which affect also fueling history, if there is no car in the app, fuelling history will be deleted.
- Adding fuelling history, which affects car and fix list items, when you add new fuelling record, your car mileage will increase, and your fix list item distance will decrease, opposite way when you remove your fuelling record
- Adding notes with posibility to edit them and check them as important ones.
- Modals to prevent accidentialy deletation of elements.
- One big button in navigation which handles all adding elements actions.
- When your distance to fix any element of your car reaches zero, you will be informed about that with notification.

## Things to improve/implement:

- [ ] Update Expo.
- [ ] Improve TypeScript implementation, mostly with proper typing, I have to learn more about TS until I'll be ready to check this task.
- [ ] Redux splittup, better store handle.
- [ ] Adding images and voice records in notes.
- [ ] Adding reminders about car technical review.
- [ ] Graph with all car speding.
- [x] Add icon and splash screen.
      That's for now, maybe I will figure out something more in the nearest future.

## Known issues

There is a issue with button in bottom navigation. The clicking event is fired only when the button is pressed on the part which is inside navigation bar, It's not going to work when clicked outside. That's because button is moved few pixels from botton and touchable is not receiving click on whole button. Don't know why I have to investigate it more.
