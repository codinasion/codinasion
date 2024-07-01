module com.example.findtherankofamatrix {
    requires javafx.controls;
    requires javafx.fxml;
    requires kotlin.stdlib;


    opens com.example.findtherankofamatrix to javafx.fxml;
    exports com.example.findtherankofamatrix;
}