CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('opensource', 'school')),
  technologies TEXT[] NOT NULL DEFAULT '{}',
  link VARCHAR(500)
);

INSERT INTO projects (title, description, type, technologies, link)
SELECT seed.title, seed.description, seed.type, seed.technologies, seed.link
FROM (
  VALUES
    (
      'Movie Planner',
      'Search for movies and save their trailers to a favorites list for later.',
      'school',
      ARRAY['JavaScript', 'Node.js', 'TypeScript', 'Vite', 'Cloud database'],
      'https://movie-planner-wdd330-final.netlify.app/'
    ),
    (
      'DevTrack',
      'A project manager for organizing projects, tracking progress, filtering by status or technology, and managing skills. Project data is saved in browser storage.',
      'school',
      ARRAY['TypeScript', 'Vite', 'Node.js', 'Browser local storage'],
      'https://sunny-faloodeh-3fda7f.netlify.app'
    )
) AS seed(title, description, type, technologies, link)
WHERE NOT EXISTS (
  SELECT 1
  FROM projects
  WHERE projects.title = seed.title
);
