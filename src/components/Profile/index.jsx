import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div className="flex first:mt-0 mt-10 mb-8">
      <img className="h-16 w-16 rounded-full" src={props.image} />
      <div className="ml-4">
        <h2 className="text-xl font-bold">{props.name}</h2>
        <div className="text-gray-600">{props.description}</div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
};
Profile.defaultProps = {
  name: 'minung.han',
  description: '여기는 설명이 들어갈 예정입니다.',
  github: 'https://github.com/hmu332233',
};

export default Profile;
