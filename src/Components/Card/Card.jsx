import styles from "./Card.module.css";
import ethImg from "../../assets/image-equilibrium.jpg";
import ethIcon from "../../assets/icon-ethereum.svg";
import clockIcon from "../../assets/icon-clock.svg";
import avatar from "../../assets/image-avatar.png";

function Card() {
  return (
    <article className={styles.article}>
      <div className={styles.img}>
        <img src={ethImg} alt="Equilibirum image" className={styles.imgImg} />
      </div>

      <div className={styles.cardDetails}>
        <h2 className={styles.h2}>Equilibrium #3429</h2>
        <p className={styles.p}>
          Our equilibrium collection promotes balance and calm.
        </p>

        <div>
          <ol className={styles.ol}>
            <li className={styles.li}>
              <span>
                <img className={styles.icon} src={ethIcon} alt="eth icon" />
              </span>
              <p className={styles.caption}>0.041 ETH</p>
            </li>
            <li className={styles.li}>
              <span>
                <img
                  className={styles.clock}
                  src={clockIcon}
                  alt="clock icon"
                />
              </span>
              <p className={styles.daysLeft}>3 days left</p>
            </li>
          </ol>
        </div>

        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" className={styles.avatarImg} />
          <p className={styles.avatarInfo}>
            Creation of
            <span className={styles.avatarInfoSpan}>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;