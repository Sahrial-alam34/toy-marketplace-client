

const Blogs = () => {
    return (
        <div className="my-container">
            <div className='bg-slate-100 h-32 pl-40 items-center justify-center mb-20'>
                <h2 className='text-5xl font-bold mt-25 text-center pt-10 '>
                    Blogs
                </h2>
            </div>
            <div className='bg-slate-200 mt-4 p-20 text-left'>
                <h2 className='text-2xl mb-5'>Question Answer Page</h2>
                <p>a. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p>Ans: Access Token: An access token is a problem that caused by an authentication server or identity provider of a user.  To protected resources or perform actions on behalf of the authenticated user it is used. Any unAuth user can not get access without access token.<br/>
                Refresh Token: This problem created by an authentication server or identity provider during the authentication process, along with the access token. It is secure and safe and get token after verification expired and generating new token called reference token .
               </p>
               <br/><br/>
                <p>b. What is different between SQL and NoSQL databases?</p>
                <p>Ans: SQL: SQL stands for Structured Query Language. It can create a structured data model based on tables with predefined schemas.SQL databases use the SQL query language, a standardized language for managing and manipulating structured data.SQL databases are commonly used in applications that require strong data consistency, transaction support, and complex querying. <br/>
                NoSQL: SQL stands for Not only SQL. It can creates a structured data model based on tables with predefined schemas.NoSQL databases use a flexible and schema-less data model.NoSQL databases are designed for horizontal scalability.NoSQL databases excel in use cases that involve large-scale data ingestion, high-speed data retrieval, unstructured or semi-structured data
                </p>
                <br/><br/>
                <p>c. What is express js? What is Nest js?</p>
                <p>Ans: Express js: It is commonly and widely used web application framework for Node.js. It is very flexibility, easy to use, has middleware. To handling different HTTP requests CRUD (GET, POST, PUT, DELETE, etc.), it provides a routing mechanism which allows developers to define routes.Developers can define error-handling middleware to capture and handle errors in a centralized manner.<br/>
                Next js:Next js is typeScript-based framework for building efficient and scalable server-side applications.It follows angular architecture. Most of angular developer uses this framework. It is statically typed.Nest.js builds upon the popular Express.js web framework
                

                </p>
                <br/><br/>
                <p>d. What is MongoDB aggregate and how does it work?</p>
                <p>Ans: It a most powerful function that used transformation and data aggregation. It can perform complex operations like filtering, grouping, sorting, joining, and performing calculations.MongoDB provides a rich set of aggregation operators that can be used within stages to perform various computations and transformations. Some commonly used operators include $group, $match, $project, $sort, $sum, $avg, $max, $min, $lookup (for joining), and many more.  </p>
            </div>
        </div>
    );
};

export default Blogs;