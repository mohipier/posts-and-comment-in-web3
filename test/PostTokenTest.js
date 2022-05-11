const PostToken = artifacts.require("PostToken");

contract("PostToken" , (accounts) => {
	beforeEach(async () => {
		instance = await PostToken.deployed()
	})

	it("let check the postCount is 0", async () => {
		let postCount = await instance.getPostsCount();
		assert.equal(postCount , 0 , "this count of posts is not 0");
	})

	it("let check get back all posts", async () => {
		let posts = await instance.getPosts();
		assert.equal(posts , '' , "the posts must be empty");
	})

	it("let add first post on blockchain", async () => {
		let post = await instance.addPost('First Post Title' , 'First Post Content');
		console.log(post);

		let posts = await instance.getPosts();
		console.log(posts);


		let postCount = await instance.getPostsCount();
		assert.equal(postCount , 1 , "this count of posts is not 1");
	})

	it("let add Second post on blockchain", async () => {
		let post = await instance.addPost('Second Post Title' , 'Second Post Content');
		console.log(post);

		let postCount = await instance.getPostsCount();
		assert.equal(postCount , 2 , "this count of posts is not 2");
	})

	it("let all posts on blockchain", async () => {
		let posts = await instance.getPosts();
		console.log(posts);


		let postCount = await instance.getPostsCount();
		assert.equal(postCount , 2 , "this count of posts is not 2");
	})

});