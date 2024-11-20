import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
	return (
        <ul>
            {friends.map((friend) => {
                return <li key={friend.id}>
                    <div>
                        <img src={friend.avatar} alt="Avatar" width="48" />
                        <p>{friend.name}</p>
                        <p>{friend.isOnline}</p>
                    </div>
                </li>;
            })}
        </ul>
   );
}

export default FriendList