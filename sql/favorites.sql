
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
VALUES ('bRtadt24Geo', '🎤 Toto - Africa (Karaoke Version) - King Of Karaoke', 'https://i.ytimg.com/vi/bRtadt24Geo/default.jpg', 1);
