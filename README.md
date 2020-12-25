# discord-clone
discord-clone is a studying project of mine, it was created with React-Redux and Firebase. It was inspired by Discord for the most part, so I haven't come up with a better name

# Features
What are the core features of this project?
* Register & Login system with Firebase authentication       
* Users get random generated avatar (gravatar) and can change it later   
* All the user communication is done through channels, private messages are also supported (technically they are channels too)   
* Channels have metadata, users can see channel's description, who created the channel, top posters list    
* Users can favorite channels to access them easier   
* Notifications for public channels   
* Animation that informs other users when someone is typing    
* Loading animations for all the elements: app itself, channels, channel's metadata, messages, ...    
* Security is done through Firebase rules for both storage and database    
* Images and emojis support for messages


# Firebase Deploy
The project was deployed with Firebase: https://discord-clone-e79c8.web.app
## Sample Accounts
1. E-Mail: Test@gmail.com   
Password: 123456    
2. E-Mail: Test2@gmail.com   
Password: 123456    
3. E-Mail: Test3@gmail.com    
Password: 123456      

You can create new accounts as well

# Deploying
For security reasons Firebase config was added to .gitignore    
Be aware, to deploy discord-clone on your own you must rename **src/firebase_sample.js** to **firebase** and fill it's config!
