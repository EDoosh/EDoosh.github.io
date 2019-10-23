cmds = `[[{
        "name" : ["help", "h"],
        "desc" : "List commands and their descriptions.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "DM to the user the help screen."
            },{
                "perms" : "All",
                "usage" : "s",
                "description" : "Get help with setting up the bot on your server for the first time."
            },{
                "perms" : "All",
                "usage" : "[command name]",
                "description" : "Display all the sub-commands of a command, and how to use them!"
            },{
                "perms" : "All",
                "usage" : "[category name]",
                "description" : "Display all the commands in a category, instead of showing the full list."
            },{
                "perms" : "All",
                "usage" : "c",
                "description" : "Send the help screen to the current channel. Can be put in front of any of these commands."
            }]
        },{
        "name" : ["info", "i"],
        "desc" : "List information about the bot.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Send information about the bot into your DMs."
            },{
                "perms" : "All",
                "usage" : "c",
                "description" : "Send information about the bot into the current channel."
            }]
        },{
        "name" : ["ping"],
        "desc" : "Get the latency and ping of the bot.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "But what if you tried using -=pong?"
            }]
        }],[{
        "name" : ["avatar", "av"],
        "desc" : "Get the avatar of a user.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Get your own avatar."
            },{
                "perms" : "All",
                "usage" : "[userRepresentable]",
                "description" : "Get the avatar of another user."
            }]
        },{
        "name" : ["bible"],
        "desc" : "Gets a bible quote image.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Get the bible quote of the day."
            },{
                "perms" : "All",
                "usage" : "r",
                "description" : "Gets a random bible quote image."
            },{
                "perms" : "All",
                "usage" : "[1-366]",
                "description" : "Gets a bible quote image from that number."
            }]
        },{
        "name" : ["fact"],
        "desc" : "Gets a random fact.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Gets a random fact."
            }]
        },{
        "name" : ["news"],
        "desc" : "Get a news article.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Send a random top headline to the channel."
            },{
                "perms" : "All",
                "usage" : "[search term]",
                "description" : "Send one of the top 20 articles that match that search term from the past week."
            }]
        },{
        "name" : ["poll"],
        "desc" : "Create a poll.",
        "more" : [{
                "perms" : "All",
                "usage" : "|[Poll Title] |[Option 1] |[Option 2]...",
                "description" : "Creates a poll with up to 10 options, seperated by a vertical bar (|)"
            }]
        },{
        "name" : ["getquote", "q", "gq", "gquote"],
        "desc" : "Get a quote.",
        "more" : [{
                "perms" : "All",
                "usage" : "(g)",
                "description" : "Gets a random quote from the server, or globally if 'g' is added."
            },{
                "perms" : "All",
                "usage" : "(g) [quoteID]",
                "description" : "Get a specified quote from the server, or globally if 'g' is added."
            }]
        },{
        "name" : ["reddit"],
        "desc" : "Get a post from reddit.",
        "more" : [{
                "perms" : "All",
                "usage" : "[subreddit] (query-limit)",
                "description" : "Get a random post from a specified subreddit. Ignore query-limit if you don't know what it does."
            }]
        },{
        "name" : ["take"],
        "desc" : "Take it. A tiny game of reverse tag.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Take it. When taken from you, the bot will notify."
            },{
                "perms" : "All",
                "usage" : "g",
                "description" : "Get the current person with it."
            }]
        },{
        "name" : ["tellme", "tm"],
        "desc" : "Tells you something about someone on a scale of 0-10.",
        "more" : [{
                "perms" : "All",
                "usage" : "[thing]",
                "description" : "Tells you something about yourself on a scale of 0-10!"
            },{
                "perms" : "All",
                "usage" : "[userRepresentable] [thing]",
                "description" : "Tells you something about another user on a scale of 0-10!"
            }]
        },{
        "name" : ["xkcd"],
        "desc" : "Get an xkcd comic.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Get the most recent xkcd."
            },{
                "perms" : "All",
                "usage" : "[number]",
                "description" : "Get that specific xkcd."
            },{
                "perms" : "All",
                "usage" : "r",
                "description" : "Get a random xkcd."
            }]
        }],[{
        "name" : ["er", "editrole", "e-r", "edit-role"],
        "desc" : "Create, edit, and delete your own custom role.",
        "more" : [{
                "perms" : "RoleModify",
                "usage" : "[create | c] [#hex] [name]",
                "description" : "Creates a custom role with that colour and name, then applies it to you."
            },{
                "perms" : "RoleModify",
                "usage" : "[color | colour | cr | cl] [#hex]",
                "description" : "Changes the colour of your existing custom role."
            },{
                "perms" : "RoleModify",
                "usage" : "[name | n] [name]",
                "description" : "Changes the name of your existing custom role."
            },{
                "perms" : "RoleModify",
                "usage" : "[toggle | t]",
                "description" : "Allows you to toggle between having and not having your custom role."
            },{
                "perms" : "RoleModify",
                "usage" : "[repos | rp | pos]",
                "description" : "Repositions your custom role to just above your highest."
            },{
                "perms" : "RoleModify",
                "usage" : "[delete | d]",
                "description" : "Deletes your custom role."
            }]
        },{
                "name": ["play", "p", "request", "req", "search"],
                "desc": "Play a song from YouTube.",
                "more" : [
                    {
                        "perms" : "All except MusicBan",
                        "usage" : "[youtube-link]",
                        "description" : "Play a song by link from YouTube. Playlists are not supported and likely never will be."
                    }, {
                        "perms" : "All except MusicBan",
                        "usage" : "(q) [search term]",
                        "description" : "Search for videos by search term, and returns list of 10 results. If 'q' is added, it loads quicker but won't show lengths."
                    }
                ]
            },{
            "name": ["now", "np", "playing", "nowplaying"],
            "desc": "Shows information about the currently playing song.",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "Shows information about the currently playing song."
                }
            ]
        },{
            "name": ["pause", "resume"],
            "desc": "Pauses / resumes the current music",
            "more" : [
                {
                    "perms" : "DJ",
                    "usage" : "",
                    "description" : "Pauses / resumes the current music."
                }
            ]
        },{
            "name": ["stop", "stopplaying", "end"],
            "desc": "Stop playing a song.",
            "more" : [
                {
                    "perms" : "DJ",
                    "usage" : "",
                    "description" : "Stops currently playing song."
                }, {
                    "perms" : "DJ",
                    "usage" : "all",
                    "description" : "Stops all songs from playing, clears queue, and leaves voice channel."
                }
            ]
        },{
            "name": ["remove", "r"],
            "desc": "Removes a song from the queue line-up.",
            "more" : [
                {
                    "perms" : "DJ",
                    "usage" : "[queueID]",
                    "description" : "Removes a song from the queue line-up."
                }
            ]
        },{
            "name": ["volume", "vol", "v"],
            "desc": "Gets / changes the volume.",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "Gets the current volume of the bot."
                }, {
                    "perms" : "DJ",
                    "usage" : "[0-200]",
                    "description" : "Changes the volume of the bot. Default & recommended at around 15."
                }
            ]
        },{
            "name": ["skip", "s", "next", "n"],
            "desc": "Skips the current song.",
            "more" : [
                {
                    "perms" : "All except MusicBan",
                    "usage" : "",
                    "description" : "Skip the currently playing song. Once VoteMin % is reached, the song skips. Run this command again to cancel your skip vote."
                }
            ]
        },{
            "name": ["list", "l", "queue"],
            "desc": "List all the songs in the queue.",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "(pg#)",
                    "description" : "List all the songs in the queue."
                }
            ]
        },{
            "name": ["votemin", "vm"],
            "desc": "Sets the percentage of users required to skip a song.",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "Gets the current VoteMin % of the bot."
                }, {
                    "perms" : "Admin",
                    "usage" : "[0-100]",
                    "description" : "Set the percentage of users require to skip a song. Default & recommended at 40."
                }
            ]
        }],[{
        "name" : ["clear", "c"],
        "desc" : "Clear a certain number of messages.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "[1-99] (reason)",
                "description" : "Clear that number of messages and, if specified, provides a reason for Log Channel."
            }]
        },{
        "name" : ["embed", "emb"],
        "desc" : "Creates an embed.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "help",
                "description" : "Displays a list of all the flags you can use to create an embed."
            },{
                "perms" : "Mod",
                "usage" : "[flags]",
                "description" : "Creates an embed with those flags and values."
            }]
        },{
        "name" : ["kick", "k"],
        "desc" : "Kick a user for a specified reason.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "[userRepresentable] (reason)",
                "description" : "Kick a user and DM them the reason if provided. Reason is also used in Log Channel."
            },{
                "perms" : "Mod",
                "usage" : "[userRepresentable] s (reason)",
                "description" : "Soft-Kick a user and uses the reason provided in Log Channel."
            }]
        },{
        "name" : ["quote"],
        "desc" : "Create or delete a quote.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "add [messageID]",
                "description" : "Create a quote from a Message ID."
            },{
                "perms" : "Mod",
                "usage" : "remove [quoteID]",
                "description" : "Remove a quote by Quote ID."
            }]
        },{
        "name" : ["warn", "w"],
        "desc" : "Warn a user for a specified reason.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "[userRepresentable] (reason)",
                "description" : "Warn a user once. If a reason is specified, that is used in Log Channel."
            },{
                "perms" : "Mod",
                "usage" : "[userRepresentable] [2-20] (reason)",
                "description" : "Warn a user for the number of times provided. If a reason is specified, that is used in Log Channel."
            }]
        },{
        "name" : ["warnings", "warns", "ws"],
        "desc" : "Clear, Delete, List, and Count the number of warns a user has.",
        "more" : [{
                "perms" : "Mod",
                "usage" : "[userRepresentable] list",
                "description" : "List all the warnings a user has."
            },{
                "perms" : "Mod",
                "usage" : "[userRepresentable] count",
                "description" : "Display the number of warnings a user has."
            },{
                "perms" : "Admin",
                "usage" : "[userRepresentable] deleteid [warnID] (reason)",
                "description" : "Delete a warn by its Warn ID. If reason is specified, use that in Log Channel."
            },{
                "perms" : "Admin",
                "usage" : "[userRepresentable] clear",
                "description" : "Clear all the warns a user has."
            }]
        }],[{
        "name" : ["ban", "b"],
        "desc" : "Ban a user for a specified reason.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "[userRepresentable] (reason)",
                "description" : "Ban a user and DM them the reason if specified. Reason is also used in Log Channel."
            },{
                "perms" : "Admin",
                "usage" : "[userRepresentable] s (reason)",
                "description" : "Soft-Ban a user and don't DM them. Reason is used in Log Channel."
            }]
        },{
        "name" : ["jl", "joinleave"],
        "desc" : "Sets the join and leave messages and roles",
        "more" : [{
                "perms" : "Admin",
                "usage" : "h",
                "description" : "Shows the help screen for joinleave, as there is a lot to it."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] ar",
                "description" : "List all the roles given to a bot or member on join."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] ar [roleRepresentable]",
                "description" : "Add an auto-role for bots or members. Removes if it's already in the list."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] [j | l]",
                "description" : "List all the messages on the server that are sent when a bot or member joins/leaves."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] [j | l] [channelRepresentable]",
                "description" : "List all the messages in the channel that are sent whena  bot or member joins/leaves."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] [j | l] [channelRepresentable] [0-9] [message]",
                "description" : "Creates a new message that will be sent to the channe when a bot or member joins/leaves. If the number is 0, it will always send. Otherwise, it will randomize out of all of the ones with the same number which to send."
            },{
                "perms" : "Admin",
                "usage" : "[b | m] [j | l] [jlID]",
                "description" : "Removes a message from the server by its JL ID."
            }]
        },{
        "name" : ["modify", "m"],
        "desc" : "Modify a role or channels bot data.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "[mod-role | admin-role | role-modify | musicban | dj-role]",
                "description" : "List all roles with that permission."
            },{
                "perms" : "Admin",
                "usage" : "[mod-role | admin-role | role-modify | musicban | dj-role] [roleRepresentable]",
                "description" : "Adds a role to that position. If it already has the permission, it will remove it."
            },{
                "perms" : "Admin",
                "usage" : "[log-channel | quote-channel | bot-updates]",
                "description" : "Displays the current channel it is set to."
            },{
                "perms" : "Admin",
                "usage" : "[log-channel | quote-channel | bot-updates] off",
                "description" : "Turns off the bot sending those types of messages to that channel."
            },{
                "perms" : "Admin",
                "usage" : "[log-channel | quote-channel | bot-updates] [channelRepresentable]",
                "description" : "Sets the channel to send those types of messages to."
            }]
        },{
        "name" : ["plvl", "permlvl", "permslvl", "permissionslvl", "plevel", "permlevel", "permslevel", "permissionslevel"],
        "desc" : "Server configuration.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "[kick | ban | notify]",
                "description" : "Get the amount of warns required to kick/ban/notify a user."
            },{
                "perms" : "Admin",
                "usage" : "[kick | ban | notify] [warn-count]",
                "description" : "Set the amount of warns required to kick/ban/notify."
            },{
                "perms" : "Admin",
                "usage" : "[kick | ban | notify] 0",
                "description" : "Disables kicking/banning/notifying."
            },{
                "perms" : "Admin",
                "usage" : "serverlevels [true | false]",
                "description" : "Enables/disables server levelling, level-up messages, and level roles."
            },{
                "perms" : "Admin",
                "usage" : "levelmessages [min-levels]",
                "description" : "Sets the minimum required levels for level-up messages to send."
            },{
                "perms" : "Admin",
                "usage" : "globalmessages [true | false]",
                "description" : "Enables/disables level-up messages for when a user globally levels up.If enabled, it still won't send if serverlevels or levelmessages requirements aren't met."
            }]
        },{
        "name" : ["prefix", "pref", "pre", "px"],
        "desc" : "Set the current prefix.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "",
                "description" : "Sends the DooshBot prefix."
            },{
                "perms" : "Admin",
                "usage" : "[new-prefix]",
                "description" : "Set a new DooshBot server prefix"
            }]
        },{
        "name" : ["rr", "reactionrole"],
        "desc" : "Create a reaction role message on a message.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "[messageID] a [reaction] [role-name]",
                "description" : "Create a reaction role on a message."
            },{
                "perms" : "Admin",
                "usage" : "[messageID] d [ID]",
                "description" : "Delete a reaction role off a message by its ID."
            },{
                "perms" : "Admin",
                "usage" : "[messageID] l",
                "description" : "List all the reaction roles on a message with their IDs."
            },{
                "perms" : "Admin",
                "usage" : "[messageID] c",
                "description" : "Clear all the reaction roles off a message."
            },{
                "perms" : "Admin",
                "usage" : "l",
                "description" : "List all reaction role messages."
            }]
        },{
        "name" : ["unban", "ub"],
        "desc" : "Unban a user.",
        "more" : [{
                "perms" : "Admin",
                "usage" : "[userID] (reason)",
                "description" : "Unban a user. If a reason is provided, it is used in the Log Channel."
            }]
        }],[{
        "name" : ["guildinfo", "gi"],
        "desc" : "Gets a little bit of information about the guild.",
        "more" : [{
                "perms" : "All",
                "usage" : "",
                "description" : "Gets information about the current guild."
            },{
                "perms" : "All",
                "usage" : "[guildID]",
                "description" : "Gets information about the guild with that ID, provided the bot is in there."
            }]
        },{
        "name" : ["lvl", "level"],
        "desc" : "Does stuff with the levels system.",
        "more" : [{
                "perms" : "All",
                "usage" : "(g) (userRepresentable)",
                "description" : "Get your own or another users server level and rank. If 'g' is added, it gets the global level data."
            },{
                "perms" : "All",
                "usage" : "(g) top (pg#)",
                "description" : "Gets the leaderboard. If the 'g' modifier is added, it gets the global leaderboard."
            },{
                "perms" : "Admin",
                "usage" : "clear (userRepresentable)",
                "description" : "Clears the entire server's levels. If a user is specified, it only clears theirs."
            }]
        },{
        "name" : ["memberinfo", "mi"],
        "desc" : "Get information about yourself or another user.",
        "more" : [{
                "perms" : "All",
                "usage" : "[userRepresentable]",
                "description" : "Get information about yourself or a specified user."
            }]
        },{"name": ["getdbprefix"],"desc": "Sends the current DooshBot prefix. Does not require the prefix in front.","more" : [{"perms" : "All","usage" : "","description" : "Sends the current DooshBot prefix. Does not require the prefix in front."}]}]]`