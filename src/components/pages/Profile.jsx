import React from 'react'
import { useParams } from 'react-router'

export const Profile = () =>
{
    const {username} = useParams()
    return (
		<div>
			<h2>Profile page of {username}</h2>
		</div>
	);
}
