# Community Reach

Community Reach is a civic technology platform designed to help people discover local events, host community gatherings, and connect with others nearby.

The project was built to reduce isolation and make it easier for students, neighbors, schools, organizations, and local groups to find meaningful ways to participate in their communities.

## Project Purpose

Community Reach exists because many people want to be involved but do not always know where to start. Local events are often scattered across group chats, flyers, social media posts, and disconnected websites.

This project brings that information into one place.

The goal is simple: make local connection easier, more visible, and more approachable.

## Main Features

1. Event discovery

Users can browse community events and see key details such as event name, date, location, and point of contact.

2. Event hosting

Users can submit events through a form so their gatherings can reach a wider audience.

3. Location-based search

Users can search for events by location and discover activities happening near them.

4. Mood-based discovery

The project includes an experimental page for recommending events based on user interests and mood.

5. Community-first design

The experience is built around accessibility, clarity, and helping people feel less intimidated about joining new spaces.

## Pages

### Home Page

The home page introduces the platform and explains what Community Reach helps users do.

It gives visitors a quick overview of the platform, its purpose, and the main actions available.

![Community Reach home page](image/README/1704745104591.png)

### Host an Event Page

The host page lets users create and promote an event by entering event details into a form.

The form collects information such as event name, event description, coordinator email, date, address, and other event details.

![Host an event page](image/README/1704747729879.png)

### Event Finder Page

The event finder page helps users search for events by location.

The page connects the search experience to backend data and is intended to support map-based directions through Google Maps.

![Event finder page](image/README/1704745176484.png)

### Events Page

The events page displays a list of upcoming community events.

Each event includes relevant details such as event name, event ID, date, address, and contact information.

### Mood-Based Events Page

The mood-based events page explores personalized recommendations based on user interest and mood.

This feature is still evolving, but the goal is to make event discovery feel more personal and engaging.

![Mood-based events page](image/README/1704747789810.png)

## Technology

Frontend: HTML, CSS, JavaScript

Backend: Python and Flask

Database: AWS-hosted data source

Planned integrations: Google Maps API and user account support

## How To Run Locally

1. Clone the repository.

2. Install Python and Flask.

3. Open the project folder in a terminal.

4. Start the Flask app with this command:

python flask.py

5. Open this address in a browser:

http://localhost:5000

## Current Progress

The core pages are built and the project already demonstrates event discovery, event hosting, and location-based search flows.

Active work is focused on improving database relationships, adding map support, making the site responsive across screen sizes, and expanding the mood-based recommendation experience.

## Future Plans

1. Add real event data for university and community use.

2. Add secure user accounts for event hosts and visitors.

3. Store user emails, usernames, and passwords securely.

4. Connect event locations to Google Maps.

5. Improve mobile responsiveness.

6. Expand recommendation logic for interest-based and mood-based event discovery.

## Status

Community Reach is an active learning and civic-tech project. It shows how a simple web platform can make local events easier to find, easier to share, and easier to attend.
