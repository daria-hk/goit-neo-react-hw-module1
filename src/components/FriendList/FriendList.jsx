import css from './FriendList.module.css';
import clsx from "clsx";

const FriendList = ({ friends }) => {
	return (
        <ul className={css.friendsList}>
            {friends.map((friend) => {
                return <li key={friend.id} className={css.friendItem}>
                    <div>
                        <img src={friend.avatar}  alt={`${friend.name}-avatar`} width="48" />
                        <p>{friend.name}</p>
                        <p className={clsx(friend.isOnline ? css.online : css.offline)}>
                            {friend.isOnline ? "Online" : "Offline"}</p>
                    </div>
                </li>;
            })}
        </ul>
   );
}

export default FriendList