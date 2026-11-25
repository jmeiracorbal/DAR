---
title: "How Models Learn: Loss Functions and Gradient Descent"
description: How loss functions and gradient descent update a model's parameters, and why training can lead to overfitting.
date: 2026-11-02
image: /assets/img/code-charts.jpg
imageAlt: A laptop showing code next to charts that track values over time.
credit:
  name: Daniil Komov
  url: https://unsplash.com/photos/GQOylIn892U
tags: [training, foundations]
---

The network in the previous post starts with random weights, so its predictions are guesses. **Training** adjusts those weights to reduce prediction errors.

## Step 1: measure the error with a loss function

A **loss function** compares a model's prediction with the correct answer and returns a number. A lower loss means a smaller error. Two common choices are:

- **Mean squared error (MSE)** for regression: the average of the squared differences between predictions and real values.
- **Cross-entropy** for classification: it heavily penalises the model when it is confident and wrong.

Training adjusts the weights to lower the loss.

## Step 2: follow the slope with gradient descent

In **gradient descent**, the *gradient* measures how the loss changes as each weight changes. It points toward increasing loss, so we update each weight in the opposite direction:

```text
new_weight = weight − learning_rate × gradient
```

The **learning rate** controls the size of each step:

| Learning rate | What happens |
| --- | --- |
| Too small | Training is painfully slow |
| Well chosen | The loss decreases steadily |
| Too large | Steps overshoot the valley and the loss jumps around or explodes |

For neural networks, the gradients of millions of weights are computed efficiently with an algorithm called **backpropagation**, which applies the chain rule from the output layer back to the input.

## Step 3: repeat for each mini-batch

One pass over the whole training set is an **epoch**. In practice the data is split into small **mini-batches**, and the weights are updated after each one. A typical training loop in PyTorch looks like this:

```python
for epoch in range(20):
    for inputs, targets in train_loader:
        predictions = model(inputs)          # 1. forward pass
        loss = loss_fn(predictions, targets) # 2. measure the error
        optimizer.zero_grad()
        loss.backward()                      # 3. compute gradients
        optimizer.step()                     # 4. update the weights
```

## Watch out for overfitting

**Overfitting** occurs when training loss falls while validation loss rises. The model has fitted details of its training data that do not carry over to unseen examples.

Common remedies:

- Add more training data or create variations with *data augmentation*.
- Use regularisation techniques such as dropout or weight decay.
- Stop training when the validation loss stops falling.

A full training run repeats these updates across many batches and millions of weights. GPUs can run many of the required multiplications in parallel.
