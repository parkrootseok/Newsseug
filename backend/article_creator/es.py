from models.article import Article
from embedd import embedd

def save_article_into_es(article: Article):
    doc = {
        "id": article.article_id,
        "title": article.title,
        "title_vector": embedd(article.title)
    }