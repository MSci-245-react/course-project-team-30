[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13377356)
# HealthyPlate
HealthyPlate is a Food and nutrition planner for students that helps students manage their diets, including meal planning, nutritional information, easy recipes, and tracking of dietary restrictions. As students, it is very difficult to find the time to cook, clean, and budget our meals. Oftentimes, we may resort to spending more money on fast food, as a means of reserving time for our studies. The purpose of this app is not only to help students save money by encouraging them to make delicious recipes at home but also to help them achieve their dietary and nutritional goals leading to healthier lives.

There are existing systems such as HelloFresh that address the same issue, however, many of the meals are not ethnic or culturally considered. Also, Hello Fresh will send the ingredients for their recipes in a box to your doorstep. 
HealthyPlate will differ in a variety of ways that will be explained under the functionalities of our system. Although receiving the ingredients straight to your doorstep sounds very efficient, there are many cases where ingredients such as produce, are not picked correctly.
We must also consider that we want to limit user expenses as much as possible, understanding that our audience is university students. HealthyPlate will send all the necessary ingredient and recipe lists, respectively, however in an attempt to lower costs by excluding expenses (i.e. delivery fees, service fees, etc.), the students will navigate to their local grocer and hand-pick the groceries themselves.



## To run this app: 
- The app starts automatically in dev mode when you open this project in Codespaces. You can stop it by pressing Ctrl+C in the Codespaces terminal, where the app is running. To restart, use the following command from the main project directory:

```
yarn dev
``` 

- make sure you modify `config.js` to point to your MySQL database. The MySQL server name is

```
ec2-3-137-65-169.us-east-2.compute.amazonaws.com
```

  The database name is the same as your UW username.
  The password is "MSCI342".


## Development Tips:
- Use CodeSpaces for this project.
- In VSCode terminal on CodeSpaces start a new branch:
```
git checkout -b your-branch-name
```
- As you code, push daily changes to your GitHub repo's `your-branch-name` branch:
```
git add .
git commit -m "done feature xyz"
git push origin your-branch-name
```

For this project, you will be required to develop a full-stack React/NodeJS application with a MySQL database. To develop the MySQL database, follow the same process as in MSci 245:

1.	Open MySQL Workbench on your local machine and connect to 

```
ec2-3-137-65-169.us-east-2.compute.amazonaws.com
```

with your UW username and password 'MSCI342'.

2.	Once you are connected, open a Query window and select your database: 

```
USE YourUserName;
```

where YourUserName is the same as in Step 1.

3.	List all the tables visible to you.

```
SHOW TABLES;
```

Tip: Click on the icon highlighted in the figure below to only run the query with the cursor.


![image](/img/screen1.png)

4.	You will see the list of tables that are currently in your database.

5.	Create new tables required for your project task.

6.  Write the React/NodeJS code required for your project task.
 
7.	After you finish your development task, make sure that the app renders in the browser and functions according to the specifications.

8.	Push changes to the GitHub:

```
git add .
git commit -m "meaningful message indicating what changes were made"
git push origin your-branch-name
```

9.	In your GitHub repo, create new pull request. Ensure that other team members review and approve the changes. After that, merge `your-branch-name` branch with the `main` branch.





