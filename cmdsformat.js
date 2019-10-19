cmds = `[
    [
        {
            "name": "help",
            "alias": "h",
            "desc": "List commands and their descriptions",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "DM to the user the help screen."
                }, {
                    "perms" : "All",
                    "usage" : "s",
                    "description" : "Get help with setting up the bot on your server for the first time."
                }, {
                    "perms" : "All",
                    "usage" : "[command-name]",
                    "description" : "Display all the sub-commands of a command, and how to use them!"
                }, {
                    "perms" : "All",
                    "usage" : "[category name]",
                    "description" : "Display all the commands in a category, instead of showing the full list."
                }, {
                    "perms" : "All",
                    "usage" : "c",
                    "description" : "Send the help screen to the current channel. Can be put in front of any of these commands."
                }
            ]
        },
        {
            "name": "info",
            "alias": "i",
            "desc": "List information about the bot",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "Send information about the bot into your DMs."
                }, {
                    "perms" : "All",
                    "usage" : "c",
                    "description" : "Send information about the bot into the current channel."
                }
            ]
        },
        {
            "name": "ping",
            "alias": "None",
            "desc": "Get the latency and ping of the bot.",
            "more" : [
                {
                    "perms" : "All",
                    "usage" : "",
                    "description" : "Get the latency and ping of the bot."
                }
            ]
        }
    ]
]`;