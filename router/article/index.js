const express = require('express')

const router = express.Router()

// List Article
router.get('/', async (req, res, next) => {
    try {
        // do something
        res.send('get  /articles')
    } catch (err) {
        next(err)
    }
})

// Feed Article
router.get('/feed', async (req, res, next) => {
    try {
        // do something
        res.send('get  /articles/feed')
    } catch (err) {
        next(err)
    }
})

// Get Article
router.get('/:slug', async (req, res, next) => {
    try {
        // do something
        res.send('get  /articles/:slug')
    } catch (err) {
        next(err)
    }
})

// Create  Article
router.post('/', async (req, res, next) => {
    try {
        // do something
        res.send('post  /articles/')
    } catch (err) {
        next(err)
    }
})
// Update  Article
router.put('/:slug', async (req, res, next) => {
    try {
        // do something
        res.send('put  /articles/:slug')
    } catch (err) {
        next(err)
    }
})
// Delete Article
router.delete('/:slug', async (req, res, next) => {
    try {
        // do something
        res.send('delete  /articles/:slug')
    } catch (err) {
        next(err)
    }
})
// Add Comments to an Article
router.post('/:slug/comments', async (req, res, next) => {
    try {
        // do something
        res.send('delete  /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
})
// Get Comments from an Article
router.get('/:slug/comments', async (req, res, next) => {
    try {
        // do something
        res.send('get  /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
})
// Delete Comment
router.delete('/:slug/comments/:id', async (req, res, next) => {
    try {
        // do something
        res.send('delete  /articles/:slug/comments/:id')
    } catch (err) {
        next(err)
    }
})
// Favorite Article
router.post('/:slug/favorite', async (req, res, next) => {
    try {
        // do something
        res.send('post  /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
})
// Unfavorite Article
router.delete('/:slug/favorite', async (req, res, next) => {
    try {
        // do something
        res.send('delete  /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
})
module.exports = router