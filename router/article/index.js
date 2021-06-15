const express = require('express')

const router = express.Router()

const articlesControl = require('../../controller/article') 

// List Article
router.get('/', articlesControl.articles)

// Feed Article
router.get('/feed', articlesControl.articlesFeed)

// Get Article
router.get('/:slug', articlesControl.getArticles)

// Create  Article
router.post('/', articlesControl.createArticles)
// Update  Article
router.put('/:slug', articlesControl.updateArticles)
// Delete Article
router.delete('/:slug', articlesControl.deleteArticles)
// Add Comments to an Article
router.post('/:slug/comments', articlesControl.addComments)
// Get Comments from an Article
router.get('/:slug/comments', articlesControl.getComments)
// Delete Comment
router.delete('/:slug/comments/:id', articlesControl.deleteComments)
// Favorite Article
router.post('/:slug/favorite', articlesControl.favComments)
// Unfavorite Article
router.delete('/:slug/favorite', articlesControl.unfavComments)
module.exports = router