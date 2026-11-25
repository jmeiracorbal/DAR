---
title: "Neural Networks Explained: From Neurons to Layers"
description: From a weighted sum to a PyTorch model, this post explains how neural networks combine simple units into layers.
date: 2026-10-19
image: /assets/img/neural-network.jpg
imageAlt: Abstract illustration of data flowing through a network, by Google DeepMind.
credit:
  name: Google DeepMind
  url: https://unsplash.com/photos/erunoELfh50
tags: [deep-learning, foundations]
---

Neural networks power image recognition, machine translation and chatbots. They are mathematical functions built from simple units called artificial neurons.

## The artificial neuron

An artificial neuron receives several numbers as input, multiplies each one by a **weight**, adds them together with a **bias**, and passes the result through an **activation function**:

```text
output = activation(w1·x1 + w2·x2 + … + wn·xn + b)
```

Each weight scales its input. The bias shifts the sum, and the activation function lets the network model non-linear relationships. Without an activation function, stacking layers would still produce a linear function.

Common activation functions are:

| Function | Formula | Typical use |
| --- | --- | --- |
| ReLU | max(0, x) | Hidden layers in most modern networks |
| Sigmoid | 1 / (1 + e<sup>−x</sup>) | Probabilities for binary outputs |
| Softmax | e<sup>xᵢ</sup> / Σ e<sup>xⱼ</sup> | Probabilities over several classes |

## Stacking neurons into layers

A neuron applies one weighted sum and activation. In a network, each **layer** applies these operations to the previous layer's output, allowing later layers to combine earlier patterns:

<figure class="diagram">
  <svg viewBox="0 0 520 260" role="img" aria-labelledby="nn-title">
    <title id="nn-title">A network with 3 input neurons, two hidden layers of 4 neurons and 2 output neurons</title>
    <g class="diagram__edges">
      <line x1="70" y1="70" x2="200" y2="50"/><line x1="70" y1="70" x2="200" y2="110"/><line x1="70" y1="70" x2="200" y2="170"/><line x1="70" y1="70" x2="200" y2="230"/>
      <line x1="70" y1="140" x2="200" y2="50"/><line x1="70" y1="140" x2="200" y2="110"/><line x1="70" y1="140" x2="200" y2="170"/><line x1="70" y1="140" x2="200" y2="230"/>
      <line x1="70" y1="210" x2="200" y2="50"/><line x1="70" y1="210" x2="200" y2="110"/><line x1="70" y1="210" x2="200" y2="170"/><line x1="70" y1="210" x2="200" y2="230"/>
      <line x1="200" y1="50" x2="330" y2="50"/><line x1="200" y1="50" x2="330" y2="110"/><line x1="200" y1="50" x2="330" y2="170"/><line x1="200" y1="50" x2="330" y2="230"/>
      <line x1="200" y1="110" x2="330" y2="50"/><line x1="200" y1="110" x2="330" y2="110"/><line x1="200" y1="110" x2="330" y2="170"/><line x1="200" y1="110" x2="330" y2="230"/>
      <line x1="200" y1="170" x2="330" y2="50"/><line x1="200" y1="170" x2="330" y2="110"/><line x1="200" y1="170" x2="330" y2="170"/><line x1="200" y1="170" x2="330" y2="230"/>
      <line x1="200" y1="230" x2="330" y2="50"/><line x1="200" y1="230" x2="330" y2="110"/><line x1="200" y1="230" x2="330" y2="170"/><line x1="200" y1="230" x2="330" y2="230"/>
      <line x1="330" y1="50" x2="460" y2="100"/><line x1="330" y1="50" x2="460" y2="180"/>
      <line x1="330" y1="110" x2="460" y2="100"/><line x1="330" y1="110" x2="460" y2="180"/>
      <line x1="330" y1="170" x2="460" y2="100"/><line x1="330" y1="170" x2="460" y2="180"/>
      <line x1="330" y1="230" x2="460" y2="100"/><line x1="330" y1="230" x2="460" y2="180"/>
    </g>
    <g class="diagram__nodes diagram__nodes--input">
      <circle cx="70" cy="70" r="16"/><circle cx="70" cy="140" r="16"/><circle cx="70" cy="210" r="16"/>
    </g>
    <g class="diagram__nodes diagram__nodes--hidden">
      <circle cx="200" cy="50" r="16"/><circle cx="200" cy="110" r="16"/><circle cx="200" cy="170" r="16"/><circle cx="200" cy="230" r="16"/>
      <circle cx="330" cy="50" r="16"/><circle cx="330" cy="110" r="16"/><circle cx="330" cy="170" r="16"/><circle cx="330" cy="230" r="16"/>
    </g>
    <g class="diagram__nodes diagram__nodes--output">
      <circle cx="460" cy="100" r="16"/><circle cx="460" cy="180" r="16"/>
    </g>
  </svg>
  <figcaption>A small fully connected network: input layer, two hidden layers and an output layer.</figcaption>
</figure>

- The **input layer** receives the raw data, for example the pixels of an image.
- The **hidden layers** transform the data step by step. Early layers detect simple patterns (edges), deeper layers combine them into complex ones (eyes, faces).
- The **output layer** produces the final answer, such as the probability of each class.

Networks with many hidden layers are called **deep networks**; training them is known as *deep learning*.

## A network in a few lines of code

In [PyTorch](https://pytorch.org/), the code mirrors the network above:

```python
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(3, 4), nn.ReLU(),   # first hidden layer
    nn.Linear(4, 4), nn.ReLU(),   # second hidden layer
    nn.Linear(4, 2),              # output layer (2 classes)
)
```

This network has `3·4 + 4 + 4·4 + 4 + 4·2 + 2 = 46` parameters. Large language models can have billions of parameters.

Training adjusts the weights based on the network's prediction errors.
