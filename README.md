Welcome to our WebHacks2017 submission,
=====================================
Squad Linkup!
=======================================

This is the start of a website that will allow users to connect and explore in real-time. The lobbying system is currenty in progress. After perfecting this, we plan on implementing a text-based adventure in which players may discuss with each other and vote for different choices. Squad Linkup will constantly be improved as our coding knowledge increases, hopefully becoming a full-fledged, production-quality game in the future. For example, it is expected that MongoDB will be implemented shortly so that users may be able to continue their games after leaving the site.

Click `Show` in the header to see our app live.

Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).
-------------------

\ ゜o゜)ノ

Patch Notes
===========================
v0.0.1 August 11, 2017
===========================
New rooms are visible under "Join an existing room", although no feedback is given when "Make new room" is pressed, and are updated amongst all clients in real-time. 
Currently, joining a room is not yet implemented - all creates rooms have a occupancy of 1 because the server considers every new room made to contain the user which created it.

v0.0.2 August 11, 2017
===========================
Minor styling updates

v0.0.3 August 12, 2017
==========================
Fixed a bug where the loop for adding rooms to available array in server continued forever.