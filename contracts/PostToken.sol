// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PostToken {
  address public owner = msg.sender;
  uint256 public postsCount = 0;

  event AddPostEvent(address author,uint256 id, uint256 timestamp);

  struct PostStruct {
    uint256 id;
    address author;
    string title;
    string content;
    uint256 timestamp;
  }

  PostStruct[] posts;

  // add post data to blockchain
  function addPost(string memory _title, string memory _content) public {
    
    postsCount += 1;
    posts.push(PostStruct(
      postsCount, msg.sender, _title, _content, block.timestamp
    ));

    emit AddPostEvent(msg.sender, postsCount, block.timestamp);
  }
 
  // show the post by id
  function getPost(uint256 _id) public view returns(PostStruct memory) {
    return posts[_id];
  }

  // show all posts
  function getPosts() public view returns(PostStruct[] memory) {
    return posts;
  }

  // get the count of posts
  function getPostsCount() public view returns(uint256) {
    return postsCount;
  }

}
