const PostToken = artifacts.require("PostToken");

module.exports = async function (deployer) {
  deployer.deploy(PostToken);
  console.log("post token deployed to: " , PostToken);
};
