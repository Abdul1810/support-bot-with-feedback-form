Revised version of Support-Bot-With-Feedback-Form by @Abdul1810.

I revised the original version to better conform to the needs of my server and in this case, it was the extensive use case commands that wick bot provides.

In lieu of this I decided to create an internal staff help menu which contains most of the basic moderation use case commands for wick. This revision was aimed
towards moderation/non-admin use and as such, some of the more dangerous commands aren't inlcluded in this version. I will be adding more to this for the basic
moderator help menu, and will hopefully create a admin/owner version as well which will have commands for those roles as well.

This script originally came with a feedback form (hence the original name), which seems to not work without timing the bot out and throwing a error (I will replicate and log it here soon as well, but plan on having this resolved and added back in as well). I went ahead and removed all support for the feedback form for now so that 
it's not interfering with basic functionality of the menu.

-----------------------------------------------------------

This menu operates off 'Owners' which are simply users that are authorized to use the '/create' command in order to generate a new embedded menu. You can add as 
many owners as youd like, but keep in mind the command is a one-off use function - meaning it only needs to be used once and thats it, unless the menu need to be
regenerated for some reason.

Further more, it includes a 'logs' channel which will let you track metrics of who uses the menu and what they where looking for. This can help identify weak areas
that can be approved upon based on how often or little it is revisited, etc.

This is also the channel the form submissions would have been submitted to if support was still in this version of the script.

I kept the original authors readme.md for reference but am going to re-write the install guide up here for simplicity.

----------------------------------------------------------
[Virtual Env Recommended] [Must have Node JS Version ^16.9.0] [install nodejs w/  'apt install nodejs']
[Enable Message And Guild Member Intent [Developer Portal](https://discord.com/developers/applications)]
[Have your discord bot information ready by step 3!]

-- Installation -- 

[w/ virtual env]

---- Step 1 ----

First, make sure you have Python 3 and pip3 installed.

$ sudo apt update

$ sudo apt -y upgrade

$ python3 -V [You’ll receive output in the terminal window that will let you know the version number.]

$ sudo apt install -y python3-pip

$ sudo apt install -y build-essential libssl-dev libffi-dev python3-dev

---- Step 2 ----

Setting up a Virtual Env.

$ sudo su [root password] [this make us sudo user so we dont have to use sudo to install w/ root]

$ sudo apt install -y python3-venv

$ mkdir environments

$ cd environments

$ python3 -m venv my_env [my_env should be the name of your project]

$ ls my_env [you should see the following]:

# bin include lib lib64 pyvenv.cfg share

$ source my_env/bin/activate [you should see the following which indicates your virtual env is active and running]

# (my_env) bot@ubuntu:~/environments$:

---- Step 3 ----

Installing and setting up the bot. [insure you are still in # (my_env) bot@ubuntu:~/environments$:]


$ apt install git

$ npm i

$ git clone https://github.com/drewbllc/Wick-Ineractive-Help-Menu.git

$ cd Wick-Ineractive-Help-Menu

$ cd config

$ nano config.js

[The Following should pop up. Use your arrow keys to navigate to each section and type/paste information needed]

# {
#        "token": "TOKEN_HERE",
#        "status": "STATUS_OF_BOT",
#        "prefix": "PREFIX_HERE",
#        "enable_slash": true,
#        "owners": ["OWNER_ID", "OWNER_ID", "OWNER_ID"],
#        "log_channel_id": "LOG_CHANNEL_ID",
#        "Important": "Must Fill The FeedBack Channel ID Field To Get Feedback From The Forms Interactions. Also owners are the only ones permitted to create menus.",
#        "Note": "Fill All The Above.For new Line use \n.For new TabSpace use \t.HyperLink use (text)[link] it will appear blue & clickable"
# }

[When do the following: ctrl+x > Y > enter]
[Type nano config.js and confirm changes saved]

[If changes save, your bot is ready to start and deploy to your server. make sure it is invited to your server with the correct intents mentioned at the beginning.]

---- Step 4. ----

Start the bot by typing:

$ npm start <botprefix>create

> support-bot-with-feedback-form@1.0.0 start
> node index.js

# Config Loaded
# Test Enviornment#0332 is Ready!
# Started refreshing application (/) commands.
# Successfully reloaded application (/) commands.

Congrats, the bot is now live. Test in your server using '/create' unless you disabled slash commands, then use <botprefix>create.
Your menu should embed and be able to be accessed/clicked by anyone that can view the channel it was created in.
I recommend creating it in a channel that users can't typ in so the menu always stays on top, unless you want to use a bot to keep it on top.


If you DO NOT want to use a virtual enviornment then start at step 1, skip step 2, and continue back at step 3-4.

Recommendation:

1. Sign up for an account at PM2: https://app.pm2.io/
2. create a new bucket
3. stop the bot but stay in its directory
4. identify and click the connect button (https://i.gyazo.com/778be548182d1f46edd33a8424764ce4.png)
5. make sure it is on 'server'
6. Follow the steps
7. Once done type 'pm2 save'

This will both monitor, and keep your bot live 24/7 as well as let you manage it in other ways.
Its a very robust application and I use it for all my bots, unless you are running +8 bots (2 buckets, 4 servers each) then you shouldnt need more than the free plan.

If you need assistance my discord username is 870.Trades#1870 - send me a fr and message me here so I can accept so we can speak, otherwise you wont be able to contact me.


-----------------------------------------------------------

# Support-Bot-With-Feedback-Form

A Support Bot For Your Server.

Easy To Host.

Work With Menu Interaction And Feedback Modal 

Easy To Fork, Edit, Host.

# Requirements

Node JS Version ^16.9.0

Enable Message And Guild Member Intent [Developer Portal](https://discord.com/developers/applications)

# Features

- [x] Slash Commands
- [x] Help Menu
- [x] Feedback Form
- [x] Issue Replies
- [x] Logging


# Instructions

Download This Repo [Here](https://github.com/Abdul1810/support-bot-with-feedback-form/archive/refs/heads/master.zip)

Unzip Files

Install Packages - `npm i`

Edit The Config File (config.json)

Run The Bot with `npm start`
(prefix in the config)`create`.

## Important Notes :

1. `Create` Command Only Works For UserID's in owners array in config.json.

2. Since it's Discord.js v13 it's only Works in Node JS Version ^16.9.0.

3. To Check Node JS Version Type `node -v` in Command Prompt.

4. If You want to Disable Slash-Commands Edit config.json "enable_slash": `false`

# Example Bot

![Main Interface](https://images-ext-2.discordapp.net/external/Zn1OaFu3p09aNnNClgSjNtG_VarXKU07eJ7MqsAjAY0/https/i.imgur.com/HYKfqLuh.jpg?width=350&height=350) ![Feedback Panel](https://images-ext-2.discordapp.net/external/AjG6QfKylkCSXU70fzRzEMjjzCxAaUCbnXSPNVcxqIM/https/i.imgur.com/psFgsbO.jpg?width=350&height=350) ![Reply Panel](https://images-ext-1.discordapp.net/external/5d0u5eoZ2Pwlb5GHfD1kpPI69xG_GQ1T43fw7UDof1w/https/i.imgur.com/AIqfKZU.jpg?width=305&height=350)

# Support

My Discord - [Abdul♥#5464](https://discord.com/users/737553088218529813)

IF You Can't Contact Me in Dms. Join Any Of The Official Discord Servers.

# Feature Request

Create a PR in this [Repo](https://github.com/Abdul1810/support-bot-with-feedback-form/pulls).

# About

Author - [Abdul1810](https://github.com/Abdul1810/)

⭐ Star This Repo If You Like.

Made With 💖 and JavaScript.
