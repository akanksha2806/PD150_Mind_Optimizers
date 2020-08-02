package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class UnderweightActivity extends AppCompatActivity {
    TextView textView;
    TextView textView2;
    Button btn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_underweight);
        textView = findViewById(R.id.bmi);
        textView2 = findViewById(R.id.status);
        btn = findViewById(R.id.suggestions);
        Intent intentthatstarted = getIntent();
        double bmi = intentthatstarted.getDoubleExtra("BMI", 0);
        String s = "Your BMI is ";
        //textView.setText(s + String.valueOf(bmi));
        String str = s + bmi;
        textView.setText(str);
        textView2.setText("Underweight");
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "http://stopcancerfund.org/pz-diet-habits-behaviors/eating-habits-that-improve-health-and-lower-body-mass-index/";
                Intent i = new Intent(Intent.ACTION_VIEW);
                i.setData(Uri.parse(url));
                startActivity(i);
            }
        });

    }


}

