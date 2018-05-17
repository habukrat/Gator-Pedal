CREATE TABLE Users (
    id INTEGER PRIMARY KEY autoincrement,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    market_type TEXT NOT NULL,
    job_to_be_done TEXT NOT NULL,
    revenue_model TEXT NOT NULL
);
