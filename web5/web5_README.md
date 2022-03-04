# 1a

select count(\*) as num_students, email_domain
from users
group by email_domain
order by num_students desc

# 1b

select city, count(\*) as students
from users
group by city
order by students desc

# 1c

select city, count(\*) as students
from users
where city= "New York"

# 1d

select count(mobile*app) as "mobile-user", count(*) \_ 100.0 / (select count(\*) from users) as "%"
from users
where mobile_app = "mobile-user"
group by mobile_app

# 1e

select count(\*) as students_completed_sql
from progress
where learn_sql = "completed"

# 1f

select \* from users
where (sign_up_at between '2017-03-01' and '2017-04-15')

# 2a

select email_domain, country, city, learn_cpp, learn_sql, learn_html, learn_javascript, learn_java
from users
inner join progress
on users.user_id = progress.user_id
where city = "New York"
order by email_domain asc

# 2b

select email_domain, country, city, users.user_id, learn_sql, learn_java
from users
inner join progress
on users.user_id = progress.user_id
where learn_sql = "completed" and learn_java = "completed"
order by email_domain asc
