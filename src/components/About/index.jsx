import Heading from "../Heading";
import styles from "./styles.module.css";
import profile from "./selfie.jpeg";

function About() {
	return (
		<section id="about">
			<Heading heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					Apprentice actively learning and building a foundation for a long-lasting career in software engineering. Proficient ability to adapt to new technologies with a creative mindset that never turns down a challenge. 
					</p>
					<p className={styles.desc}>
						Focus on bringing out the best in fellow team members, creating strong relationships, and pushing for real results. With strong communication skills, and a constant drive to always be better than yesterday.
					</p>
				</div>
				<div className={styles.right}>
					<img
					
						src={profile}
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
