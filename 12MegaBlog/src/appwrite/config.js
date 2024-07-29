import conf from "../conf/conf";
import { Client, ID, Databases, Query } from "appwrite";

export class service {
  client = new Client();
  Databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId(),
        conf.appwriteCollectionId(),
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error ", error);
    }
  }

  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error ", error);
      return false;
    }
  }

  async getPosts(quaries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        quaries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error ", error);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.uniqe(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadfile :: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  getFilePreview(fileId){
    this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }
}

const service = new service();

export default service;
