import React, { useEffect, useState } from 'react';
import Head from '../components/head';

const Home = () => {
	const [ date, setDate ] = useState(null);
	const [ array, setArray ] = useState([
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 },
		{ w: 1 }
	]);

	useEffect(() => {
		async function getDate() {
			const res = await fetch('/api/date');
			const newDate = await res.json();
			setDate(newDate);
		}
		getDate();
	}, []);

	return (
		<div>
			<Head title="Home" />

			<link href="https://fonts.googleapis.com/css?family=Prompt&display=swap" rel="stylesheet" />
			<div className="hero">
				<center>
					<img src="/logobrand66.png" width="500px" />
				</center>
				<h1 className="title">สูตรบาคาร่า</h1>
				<center class="pt-5">
					<div
						class="container"
						style={{
							width: '610px'
						}}
					>
						<div class="row justify-content-md-center w50">
							{array ? (
								array.map((element) => (
									<div class="col-1 nopadding">
										<img
											src="/P.png"
											width="50px"
											alt="..."
											class="rounded nopadding"
										/>
										<img
											src="/P.png"
											width="50px"
											alt="..."
											class="rounded nopadding"
										/>
										<img
											src="/T.png"
											width="50px"
											alt="..."
											class="rounded nopadding"
										/>
										<img
											src="/P.png"
											width="50px"
											alt="..."
											class="rounded nopadding"
										/>
										<img
											src="/B.png"
											width="50px"
											alt="..."
											class="rounded nopadding"
										/>
									</div>
								))
							) : (
								<span className="loading" />
							)}
						</div>
					</div>
				</center>
				<div
					class="container nopadding p-3"
					style={{
						width: '610px'
					}}
				>
					<div class="row nopadding justify-content-md-center">
						<div class="col nopadding" style={{ paddingRight: '0px !important', paddingLeft: '0px !important'}}>
							<button type="button" class="btn nopadding btn-primary btn-lg btn-block">
								ผู้เล่น
							</button>
						</div>
						<div class="col nopadding" style={{ paddingRight: '0px !important', paddingLeft: '0px !important'}}>
							<button type="button" class="btn nopadding btn-success btn-lg btn-block">
								เสมอ
							</button>
						</div>
						<div class="col nopadding" style={{ paddingRight: '0px !important', paddingLeft: '0px !important'}}>
							<button type="button" class="btn nopadding btn-danger btn-lg btn-block">
								เข้ามือ
							</button>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				* {
					font-family: 'Prompt', sans-serif;
					background-color: #eeeeee;
				}
				body {
					background-color: #eeeeee;
					width: 100vw;
					height: 100vh;
				}
				.nopadding {
					padding: 0 !important;
					margin: 0 !important;
				}
				.hero {
					background-color: #eeeeee;
					width: 100vw;
					height: 100vh;
					color: #333;
				}
				.title {
					margin: 0;
					width: 100%;
					padding-top: 20px;
					line-height: 1.15;
					font-size: 48px;
				}
				.title,
				.description {
					text-align: center;
				}
				.row {
					max-width: 880px;
					margin: 80px auto 40px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				}
			`}</style>
		</div>
	);
};

export default Home;
