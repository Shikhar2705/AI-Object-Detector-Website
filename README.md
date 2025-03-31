# AI Object Detection Website

This project is a web-based AI object detection application that uses TensorFlow.js and the COCO-SSD model to detect objects in real-time through a webcam feed. The application highlights detected objects with bounding boxes and labels them with their respective class names.

## Features

- Real-time object detection using the COCO-SSD model.
- Highlights detected objects with bounding boxes.
- Differentiates between "person" and other objects with distinct colors.
- Responsive design for various screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **TensorFlow.js**: For running the COCO-SSD model in the browser.
- **Webcam**: For capturing live video feed.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd object-detection
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. Allow camera access when prompted to enable the webcam feed.

## Project Structure

- **`components/object-detection.js`**: Contains the main object detection component.
- **`utils/render-predictions.js`**: Handles rendering of predictions on the canvas.
- **`app/page.js`**: The main entry point for the application.

## Customization

- Modify the detection threshold in `components/object-detection.js` by changing the value passed to `net.detect`.
- Customize the bounding box colors in `utils/render-predictions.js`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) for providing the COCO-SSD model.
- [Next.js](https://nextjs.org/) for the framework.
- [React Webcam](https://github.com/mozmorris/react-webcam) for webcam integration.
