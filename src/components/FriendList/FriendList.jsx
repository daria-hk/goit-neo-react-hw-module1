import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
	return (
        <ul>
            {friends.map((friend) => {
                return <li>
                    <div  key={friend.id}>
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