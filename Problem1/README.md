# **Design Patterns Demonstration**

This repository demonstrates several key **software design patterns** through creative real-world use cases. Below, you'll find two examples each of **Behavioral**, **Creational**, and **Structural Design Patterns**, with corresponding use cases and code concepts.

---

## **1. Behavioral Design Patterns**

### a) **Observer Pattern**
**Use Case**: **Weather Monitoring System**

In this use case, multiple displays (observers) show weather updates. These displays observe the weather station and update their data whenever the weather changes.

- **Code Concept**: 
    - We implement a `WeatherStation` (subject) that notifies all `DisplayDevices` (observers) whenever weather data (like temperature or humidity) changes.
    
### b) **Command Pattern**
**Use Case**: **Smart Home Automation**

In a smart home system, you have devices like lights, fans, and thermostats. The user can issue commands (like turning on/off, adjusting temperature, etc.) to these devices using a central controller.

- **Code Concept**: 
    - Each device has a command object (like `TurnOnCommand`, `TurnOffCommand`) that encapsulates the operation. The central controller can execute these commands on different devices.

---

## **2. Creational Design Patterns**

### a) **Singleton Pattern**
**Use Case**: **Logging System**

In an enterprise system, logging is crucial. You need a global logger object that writes logs to a file or database. It is essential to ensure that only one instance of the logger exists throughout the application.

- **Code Concept**: 
    - A `Logger` class with a private constructor and a static method that returns the same instance every time is implemented. This ensures that all parts of the system share the same logging instance.

### b) **Factory Pattern**
**Use Case**: **Vehicle Manufacturing System**

Imagine a vehicle manufacturing system where you can create different types of vehicles (car, bike, truck) based on user requirements.

- **Code Concept**: 
    - A `VehicleFactory` class is implemented, which creates objects of `Car`, `Bike`, or `Truck` based on an input parameter. This centralizes object creation and hides the creation logic from the client.

---

## **3. Structural Design Patterns**

### a) **Adapter Pattern**
**Use Case**: **Legacy System Integration**

You are tasked with integrating a modern payment gateway into an existing e-commerce platform that uses an old, incompatible payment interface.

- **Code Concept**: 
    - An `Adapter` class is implemented to convert the interface of the modern payment gateway to the legacy system's expected format. This allows the integration without changing the original classes.

### b) **Decorator Pattern**
**Use Case**: **Text Editor Features**

In a text editor, you want to add features like spell check, grammar check, and text highlighting without altering the core text editor functionality.

- **Code Concept**: 
    - A `TextEditor` class is implemented, and decorators like `SpellCheckDecorator`, `GrammarCheckDecorator`, and `HighlightDecorator` dynamically add new features to the editor without modifying its core structure.

---

These examples provide a practical implementation of various design patterns through real-world use cases. Each pattern solves a specific problem efficiently, ensuring code reusability, maintainability, and flexibility.


# Test

```bash
npm i
npm run build
npm run start