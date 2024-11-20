import css from './Profile.module.css';
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
	return  <div className={css.profileCard}>
                <div className={css.profileCardInfo}>
                    <img src={image} alt="User avatar"/>
                    <p className={css.boldTitle}>{name}</p>
                    <p className={`${css.grayTitle} ${css.beforeTag}`}>{tag}</p>
                    <p className={css.grayTitle}>{location}</p>
                </div>
                <ul className={css.profileInfoList}>
                    <li className={css.profileInfoItem}>
                        <span>Followers</span>
                        <span className={css.boldTitle}>{stats.followers}</span>
                    </li>
                    <li className={css.profileInfoItem}>
                        <span>Views</span>
                        <span className={css.boldTitle}>{stats.views}</span>
                    </li>
                    <li className={css.profileInfoItem}>
                        <span>Likes</span>
                        <span className={css.boldTitle}>{stats.likes}</span>
                     </li>
                </ul>
            </div>
}

export default Profile