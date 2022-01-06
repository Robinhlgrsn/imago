import Image from 'next/image'
import React from 'react'
import TestBild from '../../testbild.jpg'
import styles from './Categories.module.css'
import { useRouter } from 'next/router'



export default function index() {
/* 	const handleClick = (e) => {
		console.log(e.target.innerText);
		e.preventDefault()
		router.push({
			pathname: `/product/${e.target.innerText}`,
		})
	} */

	const router = useRouter()

	let unique =  -1
	let props = [
		{
			title: "Landskap",
			img: TestBild
		},
		{
			title: "Porträtt",
			img: TestBild
		},
		{
			title: "Hus",
			img: TestBild
		},
		{
			title: "Djur",
			img: TestBild
		},
	]
	let html = []

	props.forEach((category) => {
		html.push(
			<div
				className={styles.box}
				key={unique++}
				onClick={handleClick}
			>
				<div className={styles.name}>
					{category.title}
				</div>
				<div className={styles.img}>
				 	<Image
						src={category.img}
						width={200}
						height={200}
					/>
				</div>
			</div>
		)

	})
	return (
		<div className={styles.container}>
			{html}
		</div>
	)
}
