# 1a

What are the Top 25 schools with the most number of students in descending order on .edu domains? Please filter by school email domain and the number of students.

```sql
select count(*) as num_students, email_domain
from users
group by email_domain
order by num_students desc
```

# 1b

List out all the cities with the number of students from the respective cities in descending order.

```sql
select city, count(*) as students
from users
group by city
order by students desc
```

# 1c

How many .edu students are located in New York?

```sql
select city, count(*) as students
from users
where city= "New York"
```

# 1d

The mobile_app column contains either mobile-user or NULL (Empty). How many of these students are using the mobile app and how many are not? Please show the results in percentages (%).

```sql
select count(mobile_app) as "mobile-user", count(*) * 100.0 / (select count(*) from users) as "%"
from users
where mobile_app = "mobile-user"
group by mobile_app
```

# 1e

How many students have completed sql from ALL Schools?

```sql
select count(*) as students_completed_sql
from progress
where learn_sql = "completed"
```

# 1f

List out all students’ details with the sign up date from 1st of March 2017 to 15th April 2017.

```sql
select * from users
where (sign_up_at between '2017-03-01' and '2017-04-15')
```

# 2a

What courses are the New Yorkers students taking? (List according to ascending order of email_domain)

```sql
select email_domain, country, city, learn_cpp, learn_sql, learn_html, learn_javascript, learn_java
from users
inner join progress
on users.user_id = progress.user_id
where city = "New York"
order by email_domain asc
```

# 2b

List the details of the students completed sql and java from their respective Schools (.edu domains) (List according to ascending order of email_domain)

```sql
select email_domain, country, city, users.user_id, learn_sql, learn_java
from users
inner join progress
on users.user_id = progress.user_id
where learn_sql = "completed" and learn_java = "completed"
order by email_domain asc
```

# 2c

List the details of the students with their modules progress in the City that starts with ‘F’ or the City that ends with ‘D’.

```sql
select users.user_id, email_domain, city, country, learn_cpp, learn_sql, learn_html, learn_javascript, learn_java
from users
inner join progress
on users.user_id = progress.user_id
where city like 'f%'
or city like '%d'
```

# 2d

List the details of the students taking different courses from the School with the most number of students. (Note: You are not supposed to use the answer derived from Question 1a)
(user_id/ email_domain/ city / country/ learn_cpp/ learn_sql/ learn_html/ learn_javascript/ learn_java)

1. find the .edu email_domain with the highest count
2. link to students who take this course in this uni

# 2e

Which module is most popular among the students from the School with the most number of students? And which module is the least popular among the students? (Hint: Count(If))
