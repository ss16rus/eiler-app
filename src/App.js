import React from 'react';
import {
	BrowserRouter,
	Route,
	Link,
	Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './components/test.js';
import Task01 from './components/task_01/task01.js';
import Task02 from './components/task_02/task02.js';
import Task03 from './components/task_03/task03.js';

const tasks_done = 3;

function App() {
  let arr = new Array( tasks_done );
  for ( let i = 0; i < tasks_done; ++i ) {
    arr[i*2] = i < 10 ?
      <Link key={i} to={`/task-0${i+1}`}>Задача 0{i+1}</Link> :
      <Link key={i} to={`/task-${i+1}`}>Задача {i+1}</Link>;
    arr[ i*2 + 1 ] = " | ";
  }
  arr.length = arr.length - 1;

  return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

					<nav>
            <Link to={"/test"}>Test me</Link> | {" "}
						{ arr }
					</nav>

					<Switch>
						<Route path="/test">
							<Test limit={1000000}>test</Test>
						</Route>

						<Route path="/task-01">
							<Task01 limit={100}>Задача 01</Task01>
						</Route>

						<Route path="/task-02">
							<Task02 limit={4000000}>Задача 02</Task02>
						</Route>

						<Route path="/task-03">
							<Task03 target={600851475143}>Задача 03</Task03>
						</Route>
					</Switch>

				</header>
			</div>
		</BrowserRouter>
  );
}

export default App;
