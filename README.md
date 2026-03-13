prompt was : 
okay so the topic of our hackathon is Gamifying finance and financial education what we plan on doing is a two phase application based in a react frontend where firstly we would have a ui avatar that teaches everything throughout the application guides users etc and when we click some company then it teaches how to predict if the company is good to invest into by teaching how to analyse past financials of the firm and relative fields then when its done we can clcik the company name to open a randomised graph timeline between months it would start by teaching what the candles mean etc briefly then lets start with graph moving forward at some point from origin x it stops the avatar pops up and asks based on our previous assumptions what should be the prediction next candle of the graph we have options to choose if its correct it goes on congratulates otherwise after moving forward we show a different trend reverse back to point x and teach where we went wrong and why the ans should be the other one based on previous financial data of the stock how to proceed divide stuff into frontend and back end give folder structure for both and we will be using api key some free key for stock data readings of indian stocks like itc htc and other famous stocks like apple samsung meta etc complete this and let me know what to divide in ui and backend logic

now my folder structure for frontend is :
frontend
│
├── public
│
├── src
│   ├── assets
│   │    ├── avatars
│   │    ├── icons
│   │
│   ├── components
│   │    ├── Avatar
│   │    │     Avatar.jsx
│   │    │     AvatarSpeech.jsx
│   │    │
│   │    ├── Chart
│   │    │     StockChart.jsx
│   │    │
│   │    ├── Game
│   │    │     PredictionPopup.jsx
│   │    │     GameControls.jsx
│   │    │
│   │    ├── UI
│   │          Button.jsx
│   │          Card.jsx
│
│   ├── pages
│   │    ├── Home.jsx
│   │    ├── Learn.jsx
│   │    ├── Game.jsx
│   │    ├── Leaderboard.jsx
│
│   ├── services
│   │    api.js
│   │    stockService.js
│
│   ├── state
│   │    gameStore.js
│
│   ├── utils
│   │    chartHelpers.js
│
│   ├── App.jsx
│   └── main.jsx

help me with frontend ui with avatar in the bottom right of the screen with a text cloud whenever speaking 