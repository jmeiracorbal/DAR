---
title: Why GPUs Power Modern Machine Learning
description: GPUs were built to render graphics, where many calculations run in parallel. The same hardware can speed up the matrix operations used to train neural networks.
date: 2026-11-16
image: /assets/img/ai-chip.jpg
imageAlt: Close-up of a circuit board with a glowing chip labelled "AI".
credit:
  name: Immo Wegmann
  url: https://unsplash.com/photos/w69Z8K-HGQU
tags: [hardware, deep-learning]
---

Neural-network ideas are decades old. Backpropagation was popularised in 1986, but deep learning took off around 2012 as GPUs made larger training runs practical.

## Most of the work is matrix multiplication

A layer combines inputs and weights through multiply-and-add operations. Across a layer and a batch of examples, these operations form **matrix multiplications**. Training repeats them billions of times.

Those multiplications are independent, so a GPU can run many of them at the same time.

## CPU vs GPU

A CPU and a GPU are built for very different jobs:

| | CPU | GPU |
| --- | --- | --- |
| Cores | A few powerful cores | Thousands of simpler cores |
| Designed for | Varied, sequential tasks | Repeating operations across large datasets |

Graphics workloads apply the same operation to millions of pixels. Neural-network training also repeats operations across large arrays. In 2012, **AlexNet**, trained on two consumer GPUs, won the ImageNet image-recognition competition.

## Using a GPU in practice

PyTorch moves the model and its data to the chosen device with one line each:

```python
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"
model = model.to(device)
inputs = inputs.to(device)
```

The same operations can run on a CPU or a supported CUDA GPU. The speed depends on the hardware and workload.

## Beyond the GPU

Other chips target machine-learning workloads:

- **TPUs** (Tensor Processing Units) designed by Google specifically for neural networks.
- **NPUs** (Neural Processing Units) built into phones and laptops to run models locally and efficiently.
- Lower-precision formats (16 or 8 bits rather than 32) use less memory and can speed up calculations, with some loss in accuracy.

