import mysql from 'mysql';
import config from './config.js';
import fetch from 'node-fetch';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import response from 'express';
import admin from 'firebase-admin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import serviceAccount from '../App/serviceAccountKey.json' assert {type: 'json'};

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://term-project-9c5ce-default-rtdb.firebaseio.com"
  });

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

const checkAuth = (req, res, next) => {
	const idToken = req.headers.authorization;
	if(!idToken){
		return res.status(403).send('Unauthorized');
	}
	admin.auth().verifyIdToken(idToken)
		.then(decodedToken => {
			req.user = decodedToken;
			next();
		}).catch(error => {
			res.status(403).send('Unauthorized');
		});
}

// API to read movies from the database
app.post('/api/getRecipes', checkAuth, (req, res) => {
	let connection = mysql.createConnection(config);

	const sql = `SELECT id, ingredients, title`;

	connection.query(sql, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

// API to add a preferences to the database
app.post('/api/addPreferences', checkAuth, (req, res) => {
	const { id, weightGoal, currentWeight, startingWeight, carbIntake, excludedIngredients, dietaryPreferences } = req.body;

	let connection = mysql.createConnection(config);

	const sql = `INSERT INTO preferences (id, weightGoal, currentWeight, startingWeight, carbIntake, excludedIngredients, dietaryPreferences) 
				 VALUES (?, ?, ?, ?, ?)`;

	const data = [userID, movieID, reviewTitle, reviewContent, reviewScore];

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			console.error("Error adding review:", error.message);
			return res.status(500).json({ error: "Error adding review to the database" });
		}

		return res.status(200).json({ success: true });
	});
	connection.end();
});

app.post('/api/getRestrictions', checkAuth, (req, res) => {
	let connection = mysql.createConnection(config);

	const sql = `SELECT id, excludedIngredients, dietaryPreferences`;

	connection.query(sql, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});


app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
