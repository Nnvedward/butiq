import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { signUp } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { selectCurrentUser } from "../redux/userRedux";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fcf1ed;
	display: flex;
	align-items: center;
	justify-content: center;
	${mobile({ paddingTop: "120px", alignItems: "start" })}
`;

const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	text-transform: uppercase;
	transform: translate(50%, 70%);
	font-size: 30px;
	cursor: pointer;
`;
const Wrapper = styled.div`
	padding: 0 20px;
	width: 40%;
	background-color: #fcf1ed;
	${mobile({ width: "70%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: black;
	color: white;
	cursor: pointer;
	&:disabled {
		color: black;
		cursor: not-allowed;
	}
`;
const Error = styled.span`
	color: red;
`;

const Register = () => {
	const [inputs, setInputs] = useState("");
	const [role, setRole] = useState("");
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		const getRole = async () => {
			try {
				const res = await publicRequest.get("role/user");
				setRole(res.data.data);
			} catch {}
		};
		getRole();
	}, []);

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		signUp(dispatch, { ...inputs, role });
	};
	return (
		<Container>
			<Link style={{ color: "black" }} to={"/"}>
				<Logo>Butiq.</Logo>
			</Link>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input name="name" placeholder="name" onChange={handleChange} />
					<Input
						name="username"
						placeholder="username"
						onChange={handleChange}
					/>
					<Input name="email" placeholder="email" onChange={handleChange} />
					<Input
						name="password"
						placeholder="password"
						onChange={handleChange}
					/>
					<Agreement>
						By creating an account, I consent to the proccessing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button onClick={handleClick} disabled={currentUser?.isFetching}>
						CREATE
					</Button>
					{currentUser?.error && <Error>Something went wrong!</Error>}
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
