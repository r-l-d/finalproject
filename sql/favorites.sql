
DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites(
    id SERIAL PRIMARY KEY,
    video_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(300) NOT NULL,
    user_id INT NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('VJDJs9dumZI', 'The Beatles - While My Guitar Gently Weeps', 'https://i.ytimg.com/vi/VJDJs9dumZI/default.jpg', 1);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('bRtadt24Geo', '🎤 Toto - Africa (Karaoke Version) - King Of Karaoke', 'https://i.ytimg.com/vi/bRtadt24Geo/default.jpg', 3);


INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('mk5Dwg5zm2U', 'Weezer - Africa (starring Weird Al Yankovic)', 'https://i.ytimg.com/vi/mk5Dwg5zm2U/default.jpg', 3);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('_SywaUbg5wU', 'AFRICA - Toto x Peter Bence (Piano Cover)', 'https://i.ytimg.com/vi/_SywaUbg5wU/default.jpg', 3);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('J37s_u4UBQQ', 'Africa - NSP', 'https://i.ytimg.com/vi/J37s_u4UBQQ/default.jpg', 3);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('uolDTn5Aoxo', 'Toto - Africa | ITALIAN ARTISTS (cover)', 'https://i.ytimg.com/vi/uolDTn5Aoxo/default.jpg', 3);



INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('4wh9dPmjAnU', 'Toto - Africa (Live)', 'https://i.ytimg.com/vi/4wh9dPmjAnU/default.jpg', 3);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('DWfY9GRe7SI', 'Toto Africa Lyrics', 'https://i.ytimg.com/vi/DWfY9GRe7SI/default.jpg', 3);

INSERT INTO favorites (video_id, title, image_url, user_id)
VALUES ('QAo_Ycocl1E', 'Africa', 'https://i.ytimg.com/vi/QAo_Ycocl1E/default.jpg', 3);
