import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendsListItem}>
      <div>
        <img src={avatar} alt={`${name}-avatar`} width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.online : css.offline)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
