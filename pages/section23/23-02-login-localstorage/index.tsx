// login 폴더의 index.tsx _ accessToken global state에 저장해주기
import {useMutation,gql} from "@apollo/client"
import {ChangeEvent} from "react"
import { useRecoilState } from "recoil";
import {useRouter} from "next/router"
import { useState } from "react";
import { IMutation, IMutationLoginUserArgs } from "../../../src/commons/types/generate/types";
import { accessTokenState } from "../../../src/commons/stores";

const LOGIN_USER = gql`
	mutation loginUser($email:String){
		loginUser(email: $email, password: $password){
			accessToken
		}
	}
`

export default function LoginPage(){
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const [loginUser] = useMutation<Pick<IMutation,'loginUser'>,IMutationLoginUserArgs>(LOGIN_USER)
	const router = useRouter()
	const [accessToken,setAccessToken] = useRecoilState(accessTokenState)

	const onChangeEmail = (event:ChangeEvent<HTMLInputElement>)=>{
		setEmail(event.target.value)
		}
	const onChangePassword = (event:ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
		}

	const onClickLogin = async()=>{
	try{
		const result = await loginUser({
			variables:{
					email : email,
					password : password
				}
			})
			const accessToken = result.data?.loginUser.accessToken
			setAccessToken(accessToken)
			router.push('/loginsuccess')
		}catch(error){
			// alert(error.message)을 사용하셔도 무방합니다.
      alert("error.,..")
      console.log(error)
		}
	} 

	return(
		<div>
			이메일 : <input type="text" onChange={onChangeEmail}/> <br/>
			비밀번호 : <input type="password" onChange={onChangePassword}/> 
			<button onClick={onClickLogin}>로그인하기!!</button>
		</div>
	)
}