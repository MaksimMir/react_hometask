import { connect } from 'react-redux';
import * as profileActions from './profile.action';
import { useState } from 'react';
import './Profile.scss';

const Profile = ({ addProfile, profiles, deleteProfile }) => {
    const [ name, setName ] = useState('');
    const [ phone, setPhone] = useState('');
    const [ address, setAddress ] = useState('');

    const createProfile = evt => {
        evt.preventDefault();
        const id = Math.round(Math.random() * 1000000);

        const profileData = {
            id,
            name,
            phone,
            address
        }

        addProfile(profileData);
    }

    return (
        <>
            <form className="profile">
                <input 
                    value={name} 
                    onChange={evt => setName(evt.target.value)} 
                    type="text" 
                    className="profile__item"
                    placeholder="Name" />
                <input 
                    value={phone} 
                    onChange={evt => setPhone(evt.target.value)} 
                    type="text" 
                    className="profile__item"
                    placeholder="Phone" />
                <input 
                    value={address} 
                    onChange={evt => setAddress(evt.target.value)} 
                    type="text" 
                    className="profile__item"
                    placeholder="Address" />

                <button onClick={createProfile} type="submit" className="profile__submit">Submit</button>
            </form>
            <ul>
                {profiles?.map(el => {
                    return(
                        <li key={el.id}>
                            <p>{el.name}</p>
                            <p>{el.phone}</p>
                            <p>{el.address}</p>
                            <button onClick={() => deleteProfile(el.id)}>close</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const mapState = state => {
    return {
        profiles: state.profile.profileList
    }   
}

const mapDispatch = {
    addProfile: profileActions.addProfile,
    deleteProfile: profileActions.deleteProfile
}

export default connect(mapState, mapDispatch)(Profile);