---
title: What Is Machine Learning?
description: Machine learning uses examples to find patterns that can predict new results. This introduction covers supervised, unsupervised and reinforcement learning.
date: 2026-10-05
image: /assets/img/data-screen.jpg
imageAlt: A computer screen full of charts and numerical data.
credit:
  name: Yashowardhan Singh
  url: https://unsplash.com/photos/cGot2jFpKIM
tags: [foundations]
---

Traditional software follows instructions written by a programmer. A spam filter might mark any email with the phrase *"free money"* as spam. That rule stops working when spammers change their wording, so someone has to update it.

In **machine learning (ML)**, we give an algorithm examples (emails labelled *spam* or *not spam*) so it can learn patterns from them. The result is a **model**: a function that takes new input and produces a prediction.

> A computer program is said to learn from experience E with respect to some task T and performance measure P, if its performance on T, as measured by P, improves with experience E. — *Tom Mitchell, 1997*

## Three common approaches

The approaches differ in what feedback the algorithm gets: labels, unlabeled data, or rewards.

### 1. Supervised learning

The data comes with the correct answers, called **labels**. The model learns to map inputs to outputs.

- **Classification:** predicting a category (spam or not spam, cat or dog).
- **Regression:** predicting a number (the price of a house, tomorrow's temperature).

### 2. Unsupervised learning

Without labels, an algorithm can group shoppers with similar habits (**clustering**) or compress data into fewer dimensions.

### 3. Reinforcement learning

An **agent** interacts with an environment, takes actions and receives rewards or penalties. It uses that feedback to improve its strategy. Reinforcement learning can train agents to play games or control robots.

## A small example

This code splits the Iris dataset, trains a decision tree, and reports its accuracy on the test set:

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = DecisionTreeClassifier().fit(X_train, y_train)
print("Accuracy:", model.score(X_test, y_test))
```

Use the test set only for evaluation; the model has not seen those examples during training.

