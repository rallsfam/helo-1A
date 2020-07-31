CREATE TABLE helo users (
    user_id serial primary key,
    username varchar(255),
    email varchar(255),
    password text,
    profile_picture text
);

CREATE TABLE helo post (
    post_id serial primary key,
    user_id int references users(user_id),
    post_url text 
);