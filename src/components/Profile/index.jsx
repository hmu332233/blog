import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div className="flex mt-8 mb-4">
      <img className="h-16 w-16 rounded-full" src={props.image} />
      <div className="ml-4">
        <h2 className="font-medium">{props.name}</h2>
        <div className="text-sm text-gray-600">{props.description}</div>
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
