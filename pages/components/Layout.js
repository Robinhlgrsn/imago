import styles from '../../styles/Home.module.css'

export default function Layout({ props}) {

	return (
		<div className={styles.layoutMain}>
			<div className={styles.layoutDiv}>
				{props}
			</div>
		</div>
	)
}
